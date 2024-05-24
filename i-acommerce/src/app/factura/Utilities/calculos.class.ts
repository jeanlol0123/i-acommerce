export function calculoImpuesto(valor:number){
    return valor * 1.19;
}

export function impuesto(valor:number){
    return parseFloat((valor * 0.19).toFixed(2));
}


export function calculoImporte(valor:number, cantidad:number, impuesto:number){
    return (valor * cantidad) + impuesto;  
}


export function calculoImporteN(valor:number,cantidad:number){
    return (valor*cantidad);
}
