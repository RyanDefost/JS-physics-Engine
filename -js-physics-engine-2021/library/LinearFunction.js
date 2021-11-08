
class LinearFunction{
    constructor(slope, intercept){
        // f(x) = a * x + b
        // f(x) = slope * x + intercept
        this.slope = slope;
        this.intercept = intercept; 
    }

    y(x){
        return this.slope * x + this.intercept;
    }
}