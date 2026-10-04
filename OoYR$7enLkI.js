!(function (n) {
  "use strict";
  function o(n) {
    const o = n.find('[data-collapsable="true"]');
    return (
      !!o.length &&
      o.is(":visible") &&
      !o.hasClass("hide") &&
      "collapsed" !== o.attr("data-collapse-state")
    );
  }
  function t(n) {
    const t = n.find('a[data-collapser="true"]');
    t.length && o(n) && t[0].click();
  }
  n(document).ready(function () {
    !(function () {
      const o = "schoolbox-plugin--accordion-styles";
      if (n("#" + o).length) return;
      n("<style>")
        .attr("id", o)
        .text(
          '\n            /* Accordion Container Grouping */\n            .schoolbox-plugin--accordion-group {\n                border: 1px solid transparent;\n                border-radius: 8px;\n                overflow: hidden;\n                margin-bottom: 1.5rem;\n                background: #ffffff;                                \n            }\n\n            .schoolbox-plugin--accordion-group > .component-container {\n                margin: 0 !important;\n                border: none !important;\n                border-bottom: 1px solid #e4e7ed !important;\n                border-radius: 0 !important;\n                box-shadow: none !important;\n                transition: background-color 0.2s ease;\n            }\n\n            .schoolbox-plugin--accordion-group > .component-container:last-child {\n                border-bottom: none !important;\n            }\n\n            /* Full Titlebar & Heading Click Targets */\n            .schoolbox-plugin--accordion-group .component-titlebar,\n            .schoolbox-plugin--accordion-group .component-titlebar .list-item,\n            .schoolbox-plugin--accordion-group .component-titlebar h2,\n            .schoolbox-plugin--accordion-group .component-titlebar h2 span {\n                cursor: pointer !important;\n                user-select: none;\n            }\n\n            .schoolbox-plugin--accordion-group .component-titlebar {\n                padding: 12px 16px;\n                margin: 0;\n                transition: background 0.2s ease;\n            }\n\n            .schoolbox-plugin--accordion-group .component-titlebar:hover {\n                background: #f8fafc;\n            }\n\n            .schoolbox-plugin--accordion-group .component-titlebar h2 {\n                margin: 0;\n                font-size: 1rem;\n                font-weight: 600;\n            }\n         \n            /* Expanded Content Region */\n            .schoolbox-plugin--accordion-group [data-collapsable="true"] {\n                border-top: 1px solid #f0f2f5;\n                background: #fafbfc;\n            }\n\n            .schoolbox-plugin--accordion-group [data-collapsable="true"] .island {\n                padding: 16px;\n            }\n        ',
        )
        .appendTo("head");
    })();
    const e = n(
        ".component-container.Schoolbox_Resource_Textbox_Component_Homepage_Controller",
      ),
      a = [];
    let c = [];
    (e.each(function () {
      const o = n(this);
      var t;
      if (!o.data("schoolbox-plugin--accordion-init"))
        if (
          (t = o).hasClass(
            "Schoolbox_Resource_Textbox_Component_Homepage_Controller",
          ) &&
          (t.find('a[data-collapser="true"]').length > 0 ||
            t.find('[data-collapsable="true"]').length > 0)
        )
          if (0 === c.length) c.push(o);
          else {
            const n = c[c.length - 1];
            o.prev()[0] === n[0]
              ? c.push(o)
              : (c.length > 1 && a.push(c), (c = [o]));
          }
        else (c.length > 1 && a.push(c), (c = []));
    }),
      c.length > 1 && a.push(c),
      n.each(a, function (e, a) {
        const c = n(
          n.map(a, function (n) {
            return n[0];
          }),
        );
        c.data("schoolbox-plugin--accordion-init", !0);
        const r = n('<div class="schoolbox-plugin--accordion-group"></div>');
        (c.wrapAll(r),
          c
            .first()
            .parent()
            .on("click", ".component-titlebar", function (e) {
              if (
                n(e.target).closest(
                  "[data-component-settings], [data-component-handle], form, input, select, button, .editPanel",
                ).length
              )
                return;
              const a = n(this).closest(".component-container"),
                c = a.find('a[data-collapser="true"]'),
                r = n(e.target).closest('a[data-collapser="true"]').length > 0,
                i = o(a);
              r
                ? i ||
                  a.siblings(".component-container").each(function () {
                    t(n(this));
                  })
                : (e.preventDefault(),
                  e.stopPropagation(),
                  i ||
                    a.siblings(".component-container").each(function () {
                      t(n(this));
                    }),
                  c.length && c[0].click());
            }));
      }));
  });
})(jQuery);
