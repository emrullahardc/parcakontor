const homeSwiper = new Swiper(".home-swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

// jQuery
;(function () {
  document.addEventListener("DOMContentLoaded", () => {
    $("#loader").fadeOut()
  })

  $(document).on("click", "[data-toggle='tab']", function () {
    var tabs = $(this).parent().find("[data-toggle='tab']")
    var target = $(this).attr("data-target")

    $(tabs).removeClass("active")
    $(this).addClass("active")

    $(this)
      .parent()
      .find("[data-toggle='tab']")
      .each((key, val) => {
        var targets = $(val).attr("data-target")
        $("#" + targets).addClass("hidden")
      })

    $("#" + target).removeClass("hidden")
  })

  // Select Input
  $(document).on("keyup", "input, select, textarea", function () {
    $(this).removeClass("success")
    $(this).removeClass("danger")
    $(this).removeClass("warning")
  })
  $(document).on("change", "input, select, textarea", () => {
    placeholder()
  })
  placeholder()

  function placeholder() {
    $("input, select, textarea").each((key, val) => {
      if ($(val).val() != "") {
        $(val).addClass("placeholder")
      } else {
        $(val).removeClass("placeholder")
      }
    })
  }
})(jQuery)
