const navModal = $(".nav-modal-cont");
const navModalContent = $(".nav-modal");
const navListItems = $(".list-item");
$(document).ready(() => {
  $(navListItems).on("mouseover", () => {
    // if($(navModal).css("display", "none")) {
        $(navModal).fadeIn(500);
    // }
    // else if($(navModal).css("display", "block")) {
    //     $(navModal).fadeOut(500);
    // }
  })

  $(navModal).on("mouseleave", () => {
      $(navModal).fadeOut(500);
  })
//   $(navListItems).on("mouseout", () => {
//     $(navModal).fadeOut(500);
//   });
});
