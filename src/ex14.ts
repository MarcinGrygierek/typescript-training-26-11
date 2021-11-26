const calculate = (a: any, b: any): any => {
    console.log(a, typeof a, b, typeof b);
}

const genericCalculate = <T>(a: T, b: T): T => {
    console.log(a, typeof a, b, typeof b);
    return a;
}

const genericResult = genericCalculate<number>(10, 20);

const fakeApi: any = {};

const useApi = <P, R>(url: string, data: P): R => {
    const response: R = fakeApi.getData(url, data); // nie będzie 
    return response;
}