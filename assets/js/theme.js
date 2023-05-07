(() => {
  'use strict';

  const sidebar = document.querySelector('.sidebar');
  const sidebarToggles = document.querySelectorAll('#sidebarToggle, #sidebarToggleTop');

  if (sidebar) {
    const collapseElementList = [].slice.call(document.querySelectorAll('.sidebar .collapse'));
    const sidebarCollapseList = collapseElementList.map((collapseEl) => new bootstrap.Collapse(collapseEl, { toggle: false }));

    for (const toggle of sidebarToggles) {
      toggle.addEventListener('click', (e) => {
        document.body.classList.toggle('sidebar-toggled');
        sidebar.classList.toggle('toggled');

        if (sidebar.classList.contains('toggled')) {
          for (const bsCollapse of sidebarCollapseList) {
            bsCollapse.hide();
          }
        }
      });
    }

    window.addEventListener('resize', () => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

      if (vw < 768) {
        for (const bsCollapse of sidebarCollapseList) {
          bsCollapse.hide();
        }
      }
    });
  }

  const fixedNavigation = document.querySelector('body.fixed-nav .sidebar');

  if (fixedNavigation) {
    fixedNavigation.addEventListener('mousewheel DOMMouseScroll wheel', (e) => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

      if (vw > 768) {
        const e0 = e.originalEvent;
        const delta = e0.wheelDelta || -e0.detail;
        fixedNavigation.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });
  }

  const scrollToTop = document.querySelector('.scroll-to-top');

  if (scrollToTop) {
    window.addEventListener('scroll', () => {
      const scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }
})();