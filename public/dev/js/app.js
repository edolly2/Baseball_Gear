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
    if ($(event.target).hasClass("youth-list-item")) {
      // $(".youth-list-item").addClass("is-active");
      $(navModal).fadeToggle(500);
      $(youthModal).show(500);
    } else {
      // $(navModal).fadeOut(500);
      // $(".youth-list-item").removeClass("is-active");
      $(youthModal).hide();
    }

    if ($(event.target).hasClass("adult-list-item")) {
      // $(navModal).fadeOut(500);
      // $(".adult-list-item").addClass("is-active");
      $(navModal).fadeToggle(500);
      $(adultModal).show(500);
    } else {
      // $(navModal).fadeOut(500);
      // $(".adult-list-item").removeClass("is-active");
      $(adultModal).hide();
    }

    if ($(event.target).hasClass("accessories-list-item")) {
      // $(navModal).fadeOut(500);
      // $(".accessories-list-item").addClass("is-active");
      $(navModal).fadeToggle(500);
      $(accessoriesModal).show(500);
    } else {
      // $(navModal).fadeOut(500);
      // $(".accessories-list-item").removeClass("is-active");
      $(accessoriesModal).hide();
    }

    if ($(event.target).hasClass("training-list-item")) {
      // $(".training-list-item").addClass("is-active");
      $(navModal).fadeOut(500);
    } else {
      // $(".training-list-item").removeClass("is-active");
    }
  });
});

$(document).ready(() => {
  $(navListItems).on("click", (event) => {
    $(this).addClass("is-active");
    //   $(".youth-list-item").addClass("is-active");
    // } else {
    //   $(".youth-list-item").removeClass("is-active");
    // }

    // if ($(event.target).hasClass("adult-list-item")) {
    //   $(".adult-list-item").addClass("is-active");
    // } else {
    //   $(".adult-list-item").removeClass("is-active");
    // }

    // if ($(event.target).hasClass("accessories-list-item")) {
    //   $(".accessories-list-item").addClass("is-active");
    // } else {
    //   $(".accessories-list-item").removeClass("is-active");
    // }

    // if ($(event.target).hasClass("training-list-item")) {
    //   $(".training-list-item").addClass("is-active");
    // } else {
    //   $(".training-list-item").removeClass("is-active");
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
    if ($(event.target).hasClass("youth-list-gloves")) {
      $(youthSubListGloves).toggle(500);
    } else {
      $(youthSubListGloves).hide(500);
    }

    if ($(event.target).hasClass("youth-list-shoes")) {
      $(youthSubListShoes).toggle(500);
    } else {
      $(youthSubListShoes).hide(500);
    }

    if ($(event.target).hasClass("youth-list-apparel")) {
      $(youthSubListApparel).toggle(500);
    } else {
      $(youthSubListApparel).hide(500);
    }
  });

  $(adultList).on("click", (event) => {
    if ($(event.target).hasClass("adult-list-gloves")) {
      $(adultSubListGloves).toggle(500);
    } else {
      $(adultSubListGloves).hide(500);
    }

    if ($(event.target).hasClass("adult-list-bats")) {
      $(adultSubListBats).toggle(500);
    } else {
      $(adultSubListBats).hide(500);
    }

    if ($(event.target).hasClass("adult-list-shoes")) {
      $(adultSubListShoes).toggle(500);
    } else {
      $(adultSubListShoes).hide(500);
    }

    if ($(event.target).hasClass("adult-list-apparel")) {
      $(adultSubListApparel).toggle(500);
    } else {
      $(adultSubListApparel).hide(500);
    }
  });
  // $(document).on("click", (e) => {
  //   if($(e.target.id) !== 'nav-modal-cont' && $(navModal).css("display", "block")) {
  //     $(navModal).hide();
  //   }
  // });
});

// window.onload = function(){
//   var navModalCont = document.getElementById('nav-modal-cont');
//   document.onclick = function(e){
//      if(e.target.id !== 'nav-modal-cont'){
//         navModalCont.style.display = 'none';
//      }
//   };
// };

$(document).ready(() => {
  $(".all-ul")
    .children("li")
    .on("click", (e) => {
      $(".all-ul").children("li").removeClass("active");
      $(e.currentTarget).addClass("active");
    });

  $(".nav-modal-sublist")
    .children("li")
    .on("click", (e) => {
      $(".nav-modal-sublist").children("li").removeClass("active");
      $(e.currentTarget).addClass("active");
    });

  $(".nav-list")
    .children("a")
    .on("click", (e) => {
      $(".nav-list").children("a").removeClass("is-active");
      if($(".nav-list").children("a").hasClass('account-btn') || $(".nav-list").children("a").hasClass('cart-btn')) {
        $('.account-btn').removeClass("is-active");
        $('.cart-btn').removeClass("is-active");
      }
      else {
        $(e.currentTarget).addClass("is-active");
      }
    });
});

const accountBtn = $("#nav-account-btn");
const signinModal = $(".signin-modal-cont");
const signinCancel = $("#signin-cancel");

$(document).ready(() => {
  $(accountBtn).on("click", () => {
    $(signinModal).css("display", "flex");
  });

  $(signinCancel).on("click", () => {
    $(signinModal).css("display", "none");
  });
});
