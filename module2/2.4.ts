{
    // generic interface
    interface Developer<T,X=null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?:X;
    }
    type Emelab = {
        brand: string;
        model: string;
        releaseYear: number
    }
    const poorDeveloper: Developer<Emelab> = {
        name: "jobayar",
        computer: {
            brand: 'hp',
            model: "hp pavilion 15cc-142tx",
            releaseYear: 2017,
        },
        smartWatch: {
            brand: 'imilab',
            model: "123we",
            releaseYear: 2022,
        },
        

    }
interface Rich{
    brand: string;
    model: string;
    releaseYear: number;
    display: string;
}

    const richDeveloper: Developer<Rich> = {
        name: "jobayar",
        computer: {
            brand: 'hp',
            model: "hp pavilion 15cc-142tx",
            releaseYear: 2017,

        },
        smartWatch: {
            brand: 'imilab',
            model: "123we",
            releaseYear: 2022,
            display: 'oled'
        }
    }

    //
}