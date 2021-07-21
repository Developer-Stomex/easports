document.addEventListener("DOMContentLoaded", () => {
 

   const myModalHeader = document.querySelector("#my-modal-header")
   const modal = document.getElementById("myModal");
  
   const btnSignSearch = document.querySelector(".sign-serch-box")

   const btn = document.querySelector("#myBtn");
   const btnSearchHeader = document.querySelector("#myBtnSearch");

   const btnClose = document.querySelectorAll(".btn-close");

   if (btn !== null) {
      btn.addEventListener("click", clickInvite)
   }
   if (btnSearchHeader !== null) {
      btnSearchHeader.addEventListener("click", clickHeaderSearch)
   }


   function clickInvite() {
      
      document.querySelector('body').style.overflow = "hidden"
      modal.classList.add('active')
   }
   function clickHeaderSearch() {
      if (btnSignSearch !== null) {
         btnSignSearch.style.display = "block"

      }
      myModalHeader.classList.add('active')
      $('.search-input').autofocus = true;
       $('.search-input').autofocus = true;
   }


   btnClose.forEach((el) => {
      el.addEventListener("click", function () {
         if (myModalHeader !== null) {
            myModalHeader.classList.remove('active')
            if (btnSignSearch !== null) {
               btnSignSearch.style.display = "none"
            }
         }
         modal.classList.remove('active')
         document.querySelector('body').style.overflow = ""
      });
   })


   window.onclick = function (event) {
         if (event.target == modal) {
            modal.classList.remove('active')
            document.querySelector('body').style.overflow = ""
         } else if (event.target == myModalHeader) {
            myModalHeader.classList.remove('active')
            if (btnSignSearch !== null) {
               btnSignSearch.style.display = "none"
            }
            
         }

   }
  

})

