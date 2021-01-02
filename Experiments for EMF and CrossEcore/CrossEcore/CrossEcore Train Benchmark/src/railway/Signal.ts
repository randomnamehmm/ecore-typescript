    export class Signal
    {
    	
		public static readonly FAILURE_VALUE:number = 1;
		public static readonly STOP_VALUE:number = 0;
		public static readonly GO_VALUE:number = 2;
		
		public static FAILURE:Signal = new Signal(1, "FAILURE", "FAILURE");
		public static STOP:Signal = new Signal(0, "STOP", "STOP");
		public static GO:Signal = new Signal(2, "GO", "GO");

		private static VALUES_ARRAY:Array<Signal> = [
			Signal.FAILURE, 
			Signal.STOP, 
			Signal.GO
		];

        public static get_string(literal:string):Signal
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

        public static getByName(name:string):Signal
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

        public static get_number(value:number):Signal
        {
            switch (value)
            {
			case this.FAILURE_VALUE: return this.FAILURE;
			case this.STOP_VALUE: return this.STOP;
			case this.GO_VALUE: return this.GO;
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
