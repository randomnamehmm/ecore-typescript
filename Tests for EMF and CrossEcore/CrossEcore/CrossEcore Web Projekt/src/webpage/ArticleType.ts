    export class ArticleType
    {
    	
		public static readonly REVIEW_VALUE:number = 0;
		public static readonly STUDY_VALUE:number = 1;
		
		public static REVIEW:ArticleType = new ArticleType(0, "REVIEW", "REVIEW");
		public static STUDY:ArticleType = new ArticleType(1, "STUDY", "STUDY");

		private static VALUES_ARRAY:Array<ArticleType> = [
			ArticleType.REVIEW, 
			ArticleType.STUDY
		];

        public static get_string(literal:string):ArticleType
        {
            for (let i = 0; i < this.VALUES_ARRAY.length; i++)
            {
                let result = this.VALUES_ARRAY[i];
                if (result.toString() === literal)
                {
                    return result;
                }
            }
            return null;
        }

        public static getByName(name:string):ArticleType
        {
	        for (let i = 0; i < this.VALUES_ARRAY.length; i++)
	        {
	            let result = this.VALUES_ARRAY[i];
	            if (result.getName()==name)
	            {
	                return result;
	            }
	        }
	        return null;
        }

        public static get_number(value:number):ArticleType
        {
            switch (value)
            {
			case this.REVIEW_VALUE: return this.REVIEW;
			case this.STUDY_VALUE: return this.STUDY;
            }
            return null;
        }

	    private value:number;
	    private name:string;
	    private literal:string;

	    private constructor(value:number, name:string, literal:string)
	    {
	        this.value = value;
	        this.name = name;
	        this.literal = literal;
	    }
	
	    public getLiteral():string
	    {
	        return this.literal;
	    }
	
	    public getName():string
	    {
	        return this.name;
	    }
	
	    public getValue():number
	    {
	        return this.value;
	    }
	    
	    public toString():string
	    {
	        return this.literal;
	    }
    }
