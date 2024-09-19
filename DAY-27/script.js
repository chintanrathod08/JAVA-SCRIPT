class leptops{
    constructor(Lenovo,Dell,Asus,Infinix){
        this.Lenovo = Lenovo,
        this.Dell = Dell,   
        this.Asus = Asus,
        this.Infinix = Infinix
    }

    // getValue(){
    //     console.log(`${this.Lenovo} ${this.Dell}  ${this.Asus}  ${this.Infinix}  ${this.Keybord}  ${this.Mouse}`);
    // }

}

class accessories extends leptops{
    constructor(Lenovo,Dell,Asus,Infinix,Keybord,Mouse){
        super(Lenovo,Dell,Asus,Infinix,Keybord,Mouse)
        this.Keybord = Keybord,
        this.Mouse = Mouse
    }
}


let show = new accessories ("20,120/-", "50,000/-" , "65,025/-" ,"78,000/-" , "3,500/-" , "2,850/-")
console.log(show);




