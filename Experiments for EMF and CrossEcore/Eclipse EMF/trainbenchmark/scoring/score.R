if("plyr" %in% rownames(installed.packages()) == FALSE){
  install.packages("plyr")}

################################################################################
library(plyr)
################################################################################

df <- read.table('../output/output.tsv', header = T)

# for evaluating the performance, we are only concerned about the runtime values
df <- df[df$MetricName == "time", ]

queries = c('PosLength', 'RouteSensor', 'SemaphoreNeighbor', 'SwitchSensor','SwitchSet')
changesets = c('fixed', 'proportional')

CalculatesTheScoreTimeKForAQueryAndAChangeSet <- function(df) {
  # summarize the runtime of the phases
  tournament <- ddply(.data = tournament,
                      .variables = c("ChangeSet", "Query", "RunIndex", "Tool", "Size"), 
                      summarize, SumOfTimes = sum(MetricValue))
  # take the median values for each tool/size
  tournament <- ddply(.data = tournament, .variables = c("ChangeSet", "Query", "Tool", "Size"),
                      summarize, MedianOfSumOfTimes = median(SumOfTimes))
  # declare the fastest time for every Size
  fastest.times <- ddply(.data = tournament, .variables = c("ChangeSet", "Query", "Size"), summarize,
                         Fastest = min(MedianOfSumOfTimes))
  tournament.with.fastest.times <- merge(tournament, fastest.times)
  tournament.with.fastest.times$Score.Time.k <- 1 / (1 + log2(
    tournament.with.fastest.times$MedianOfSumOfTimes /
      tournament.with.fastest.times$Fastest))
  return(tournament.with.fastest.times)
}

total.results <- data.frame(Date=as.Date(character()),
                 File=character(), 
                 User=character(), 
                 stringsAsFactors=FALSE) 

for (query in queries) {
  for (changeset in changesets) {
    message("Tournament for query = ", query, ", changeset = ", changeset)
    tournament <- df[df$Query == query & df$ChangeSet == changeset, ]
    
    ## calculate score_time values
    tournament <- CalculatesTheScoreTimeKForAQueryAndAChangeSet(tournament)
    #print(tournament)
    
    ## calculate score_size values
    tournament$Score.Size.k <- log2(tournament$Size) + 1
    #print(tournament)
    
    # calculate score values
    tournament$Score <- tournament$Score.Size.k * tournament$Score.Time.k
    #print(tournament)
    
    ## calculation of points without normalization
    tournament.results <-
      ddply(tournament, .variables = c("ChangeSet", "Query", "Tool"),
            summarize, SumOfScores = sum(Score))
    
    #print(tournament.results)
    
    ## calculation of point with normalization
    n <- log2(max(tournament$Size)) + 1
    tournament.results$SumOfScores <- tournament.results$SumOfScores / 
      (n * (n + 1) / 2)
    
    print(tournament.results)
    total.results <- rbind(total.results, tournament.results)
  }
  
  #message("Total results")
  #print(total.results)

  summarized.results <-
    ddply(total.results, .variables = c("Tool"), summarize, FinalScore = sum(SumOfScores))
}

message("Summarized results")
print(summarized.results)
