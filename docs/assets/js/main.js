"use strict";const addItems=document.querySelector(".add-items"),itemsList=document.querySelector(".plates");let items=JSON.parse(localStorage.getItem("items"))||[];const btnClear=document.querySelector(".btn-clear");function addItem(t){t.preventDefault();const e={text:this.querySelector("[name=item]").value,done:!1};items.push(e),printList(items,itemsList),localStorage.setItem("items",JSON.stringify(items)),this.reset()}function printList(t=[],e){e.innerHTML=t.map((t,e)=>`\n        <li>\n          <input type="checkbox" data-index=${e} id="item${e}" ${t.done?"checked":""}/>\n          <label for="item${e}">${t.text}</label>\n        </li>\n      `).join("")}function toggleDone(t){const e=t.target;if(!e.matches("input"))return;const i=e.dataset.index;items[i].done=!items[i].done,localStorage.setItem("items",JSON.stringify(items))}function clearAll(){itemsList.innerHTML="<li>Loading Tapas...</li>",items=[],localStorage.setItem("items",JSON.stringify(items))}addItems.addEventListener("submit",addItem),itemsList.addEventListener("click",toggleDone),btnClear.addEventListener("click",clearAll),printList(items,itemsList);