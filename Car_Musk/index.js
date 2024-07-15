// Этот код обеспечивает, что весь JavaScript-код будет выполняться только после того, как HTML-документ будет полностью загружен и отрендерен в браузере.

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("scroll-container");
  let scrollAmount = 0;

  function autoScroll() {
    container.scrollLeft += 1; // Увеличивает значение общей прокрутки на 1.
    scrollAmount += 1;

    // Проверка, достиг ли конец контейнера
    // Если общая прокрутка больше или равна разнице между полной шириной контейнера и его видимой шириной, то это означает, что контейнер достиг конца.
    // В этом случае scrollAmount сбрасывается в 0, и container.scrollLeft устанавливается в 0, чтобы прокрутка начиналась сначала.
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      scrollAmount = 0;
      container.scrollLeft = 0;
    }
  }

  // Установить интервал для автоматической прокрутки
  setInterval(autoScroll, 20); // Скорость прокрутки (меньшее значение - быстрее)
});
