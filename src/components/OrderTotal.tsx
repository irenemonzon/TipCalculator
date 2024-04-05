import { useMemo } from "react"
import { OrdenItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps={
    order:OrdenItem[]
    tip:number
    placeOrder:() => void
}

export const OrderTotal = ({order,tip,placeOrder }:OrderTotalProps) => {

    const subTotalAmount=useMemo(()=>order.reduce((total,item)=>total+(item.quantity * item.price ),0),[order])

    const tipAmount=useMemo(()=>subTotalAmount * tip,[tip,order])

    const totalAmount=useMemo(()=>subTotalAmount + tipAmount,[tip,order])


  return (
    <>
        <div className='space-y-3'>
            <h2 className='font-black text-2xl'>Totales y Propina</h2>
            <p>Subtotal a pagar:{''}
                <span className='font-bold '> {formatCurrency(subTotalAmount)}</span>
            </p>
            <p>Propinas:{''}
                <span className='font-bold '> {formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a pagar:{''}
                <span className='font-bold '> {formatCurrency(totalAmount)}</span>
            </p>

        </div>
        <button className="w-full p-3 bg-black text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount===0}
        onClick={placeOrder}
        >
            Guardar Orden

        </button>

    </>
  )
}
