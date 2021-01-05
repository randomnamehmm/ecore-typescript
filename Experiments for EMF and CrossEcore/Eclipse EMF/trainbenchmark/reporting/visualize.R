library("jsonlite", quietly=T, verbose=F, warn.conflicts=FALSE)
library("ggplot2",quietly=T, verbose=F, warn.conflicts=FALSE)
library("plyr", quietly=T, verbose=F, warn.conflicts=FALSE)
source("functions.R")
source("plot.R")
source("constants.R")

args <- commandArgs(trailingOnly = TRUE)
configPath <- args[1]

results <-read.csv(resultsPath, header=TRUE, sep='\t')

config <- fromJSON(configPath)

if (validPhase(results, config$Summarize_Functions$Phases) == FALSE){
  print("Non existing phasename provided!")
  quit()
}
  
index <- 0
settings <- PlotSettings()
uniqueScenarios <- unique(results$ChangeSet)

for(row in 1:nrow(config$Summarize_Functions)){
  phases <- config$Summarize_Functions[row,]$Phases
  name <- config$Summarize_Functions[row,]$Name
  index <- index + 1
  for(scenario in uniqueScenarios){
    metric <- "time"
    subData1 <- subset(results, ChangeSet==scenario & MetricName == metric)
    subData1$MetricValue <- subData1$MetricValue * (10**-6)
    
    if (config$Dimensions$Groups$Query){
      uniqueTools <- unique(subData1$Tool)
      settings <- setGroup(settings, "Query")
      for(tool in uniqueTools){
        subData2 <- subset(subData1, Tool==tool)
        
        if (config$Dimensions$X_Dimensions$Size){
          title <- paste(tool, ", ", scenario, ", Function: ", concatPhases(phases), " (Y: Log2) (X: Log2)", sep='')
         
          settings <- setTitle(settings, title)
          settings <- setDimensions(settings, "Size", "MetricValue")
          settings <- setLabels(settings, "Size", "Time (ms)")
          settings <- setAxis(settings, "Log2", yAxis)
          for (extension in config$Extension){
            fileName <- paste(rootPath, scenario, "-", tool, "-GroupBy-Query-", metric, "-", name, ".",  extension, sep='')
            savePlot(subData2, settings, phases, fileName)
          }
        }
        
        if (config$Dimensions$X_Dimensions$Iteration){
          uniqueSizes <-unique(subData2$Size)
          for(size in uniqueSizes){
            subData3 <- subset(subData2, Size==size)
            title <- paste(scenario, ", ", tool, ", Size: ", size, ", Function: ", concatPhases(phases), 
                           " (Y: Log2) (X: Continuous)", sep='')
           
            settings <- setTitle(settings, title)
            settings <- setDimensions(settings, "Iteration", "MetricValue")
            settings <- setLabels(settings, "Iterations", "Time (ms)")
            settings <- setAxis(settings, "Continuous", yAxis)
            for (extension in config$Extension){
              fileName <- paste(rootPath, scenario, "-", tool, "-Size-", size, "-GroupBy-Query-", metric, "-", name, ".", extension, sep='')
              savePlot(subData3, settings, phases, fileName)
            }
          }
        } 
      }
    }
    
    if (config$Dimensions$Groups$Tool){
      uniqueQueries <- unique(subData1$Query)
      settings <- setGroup(settings, "Tool")
      for(query in uniqueQueries){
        subData2 <- subset(subData1, Query==query)
        
        if (config$Dimensions$X_Dimensions$Size){
          title <- paste(scenario, ", ",query, ", Function: ", concatPhases(phases), " (Y: Log2) (X: Log2)", sep='')
          settings <- setTitle(settings, title)
          settings <- setDimensions(settings, "Size", "MetricValue")
          settings <- setLabels(settings, "Size", "Time (ms)")
          settings <- setAxis(settings, "Log2", yAxis)
          for (extension in config$Extension){
            fileName <- paste(rootPath, scenario, "-", query, "-GroupBy-Tool-",metric, "-", name, ".", extension, sep='')
            savePlot(subData2, settings, phases, fileName)
          }
        }
        
        if (config$Dimensions$X_Dimensions$Iteration){
          uniqueSizes <-unique(subData2$Size)
          settings <- setDimensions(settings, "Iteration", "MetricValue")
          settings <- setLabels(settings, "Iterations", "Time (ms)")
          settings <- setAxis(settings, "Continuous", yAxis)
          for(size in uniqueSizes){
            subData3 <- subset(subData2, Size==size)
            title <- paste(scenario, ", ", query, ", Size: ", size, ", Function:  ", concatPhases(phases),
                           " (Y: Log2) (X: Continuous)", sep='')
            for (extension in config$Extension){
              fileName <- paste(rootPath, scenario, "-", query, "-Size-", size, "-GroupBy-Tool-", metric, "-", name, ".", extension, sep='')
              settings <- setTitle(settings, title)
              savePlot(subData3, settings, phases, fileName)
            }
          }
        }     
      }
    }
  }
}