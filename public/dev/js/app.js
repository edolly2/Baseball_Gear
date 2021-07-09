const navModal = $(".nav-modal-cont");
const navModalContent = $(".nav-modal");
const navListItems = $(".list-item");
// $(document).ready(() => {
//   $(navListItems).on("click", () => {
//     $(navModal).fadeToggle(500);
//   });
// });

const youthModal = $(".nav-modal-youth");
const adultModal = $(".nav-modal-adult");
const accessoriesModal = $(".nav-modal-accessories");
const trainingModal = $(".nav-modal-training");
$(document).ready(() => {
  $(navListItems).on("click", (event) => {
    $(navModal).fadeOut(500);
    if($(event.target).hasClass("youth-list-item")) {
      $(navModal).fadeIn(500);
      $(youthModal).show(500);
    }
    else {
      // $(navModal).fadeOut(500);
      $(youthModal).hide();
    }

    if($(event.target).hasClass("adult-list-item")) {
      // $(navModal).fadeOut(500);
      $(navModal).fadeIn(500);
      $(adultModal).show(500);
    }
    else {
      // $(navModal).fadeOut(500);
      $(adultModal).hide();
    }

    if($(event.target).hasClass("accessories-list-item")) {
      // $(navModal).fadeOut(500);
      $(navModal).fadeIn(500);
      $(accessoriesModal).show(500);
    }
    else {
      // $(navModal).fadeOut(500);
      $(accessoriesModal).hide();
    }

    if($(event.target).hasClass("training-list-item")) {
      $(navModal).fadeOut(500);
      // $(trainingModal).show(500);
    }
    // else {
      // $(navModal).fadeOut(500);
    //   $(trainingModal).hide();
    // }
  });
});

const youthList = $(".youth-list");
const youthSubListGloves = $(".youth-sublist-gloves");
const youthSubListShoes = $(".youth-sublist-shoes");
const youthSubListApparel = $(".youth-sublist-apparel");
const adultList = $(".adult-list");
const adultSubListGloves = $(".adult-sublist-gloves");
const adultSubListBats = $(".adult-sublist-bats");
const adultSubListShoes = $(".adult-sublist-shoes");
const adultSubListApparel = $(".adult-sublist-apparel");

$(document).ready(() => {
  $(youthList).on("click", (event) => {
    if($(event.target).hasClass("youth-list-gloves")) {
      $(youthSubListGloves).toggle(500);
    }
    else {
      $(youthSubListGloves).hide(500);
    }

    if($(event.target).hasClass("youth-list-shoes")) {
      $(youthSubListShoes).toggle(500);
    }
    else {
      $(youthSubListShoes).hide(500);
    }

    if($(event.target).hasClass("youth-list-apparel")) {
      $(youthSubListApparel).toggle(500);
    }
    else {
      $(youthSubListApparel).hide(500);
    }
  });


    $(adultList).on("click", (event) => {
      if($(event.target).hasClass("adult-list-gloves")) {
        $(adultSubListGloves).toggle(500);
      }
      else {
        $(adultSubListGloves).hide(500);
      }

      if($(event.target).hasClass("adult-list-bats")) {
        $(adultSubListBats).toggle(500);
      }
      else {
        $(adultSubListBats).hide(500);
      }
  
      if($(event.target).hasClass("adult-list-shoes")) {
        $(adultSubListShoes).toggle(500);
      }
      else {
        $(adultSubListShoes).hide(500);
      }
  
      if($(event.target).hasClass("adult-list-apparel")) {
        $(adultSubListApparel).toggle(500);
      }
      else {
        $(adultSubListApparel).hide(500);
      }
  });
});