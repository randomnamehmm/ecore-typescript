    export class Position
    {
    	
		public static readonly FAILURE_VALUE:number = 0;
		public static readonly LEFT_VALUE:number = 1;
		public static readonly RIGHT_VALUE:number = 2;
		public static readonly STRAIGHT_VALUE:number = 3;
		
		public static FAILURE:Position = new Position(0, "FAILURE", "FAILURE");
		public static LEFT:Position = new Position(1, "LEFT", "LEFT");
		public static RIGHT:Position = new Position(2, "RIGHT", "RIGHT");
		public static STRAIGHT:Position = new Position(3, "STRAIGHT", "STRAIGHT");

		private static VALUES_ARRAY:Array<Position> = [
			Position.FAILURE, 
			Position.LEFT, 
			Position.RIGHT, 
			Position.STRAIGHT
		];

        public static get_string(literal:string):Position
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

        public static getByName(name:string):Position
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

        public static get_number(value:number):Position
        {
            switch (value)
            {
			case this.FAILURE_VALUE: return this.FAILURE;
			case this.LEFT_VALUE: return this.LEFT;
			case this.RIGHT_VALUE: return this.RIGHT;
			case this.STRAIGHT_VALUE: return this.STRAIGHT;
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
