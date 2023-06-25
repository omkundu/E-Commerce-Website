import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUserOrderAsync, selectOrder, selectUserOrders } from "../userSlice";
import { selectLoggedInUser } from "../../auth/Components/authSlice";

export default function UserOrders() {
  const dispatch = useDispatch();
  const user= useSelector(selectLoggedInUser)
  const orders=useSelector(selectUserOrders)

  useEffect(()=>{
    dispatch(fetchLoggedInUserOrderAsync(user.id))
  },[])
   console.log(orders,"orders getting or not")
  return (
    <div>
      {orders?.map((order)=>(
               

      <div>
        {order.id}
      </div>
       ))}
    </div>
  );
}
