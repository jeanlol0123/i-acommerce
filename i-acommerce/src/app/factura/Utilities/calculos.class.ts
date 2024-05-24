export function calculoImpuesto(valor:number){
    return valor * 1.19;
}

export function impuesto(valor: number): number {
  const impuesto = valor * 0.19;
  return Number(impuesto.toFixed(2));
}

export function calculoImporte(valor:number, cantidad:number, impuesto:number){
    return (valor * cantidad) + impuesto;  
}


export function calculoImporteN(valor:number,cantidad:number){
    return (valor*cantidad);
}
