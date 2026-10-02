!(function (n) {
  "use strict";
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
    const o = n(
        ".component-container.Schoolbox_Resource_Textbox_Component_Homepage_Controller",
      ),
      t = [];
    let e = [];
    (o.each(function () {
      const o = n(this);
      var a;
      if (!o.data("schoolbox-plugin--accordion-init"))
        if (
          (a = o).hasClass(
            "Schoolbox_Resource_Textbox_Component_Homepage_Controller",
          ) &&
          (a.find('a[data-collapser="true"]').length > 0 ||
            a.find('[data-collapsable="true"]').length > 0)
        )
          if (0 === e.length) e.push(o);
          else {
            const n = e[e.length - 1];
            o.prev()[0] === n[0]
              ? e.push(o)
              : (e.length > 1 && t.push(e), (e = [o]));
          }
        else (e.length > 1 && t.push(e), (e = []));
    }),
      e.length > 1 && t.push(e),
      n.each(t, function (o, t) {
        const e = n(
          n.map(t, function (n) {
            return n[0];
          }),
        );
        e.data("schoolbox-plugin--accordion-init", !0);
        const a = n('<div class="schoolbox-plugin--accordion-group"></div>');
        (e.wrapAll(a),
          e
            .first()
            .parent()
            .on("click", ".component-titlebar", function (o) {
              if (
                n(o.target).closest(
                  "[data-component-settings], [data-component-handle], form, input, select, button, .editPanel",
                ).length
              )
                return;
              (o.preventDefault(), o.stopPropagation());
              const t = n(this).closest(".component-container"),
                e = t.find('a[data-collapser="true"]');
              ((function (n) {
                const o = n.find('[data-collapsable="true"]');
                return (
                  !!o.length &&
                  o.is(":visible") &&
                  !o.hasClass("hide") &&
                  "collapsed" !== o.attr("data-collapse-state")
                );
              })(t) ||
                t.siblings(".component-container").each(function () {
                  !(function (n) {
                    const o = n.find('[data-collapsable="true"]'),
                      t = n.find('a[data-collapser="true"]');
                    if (!o.length) return;
                    o.is(":visible") &&
                      !o.hasClass("hide") &&
                      "collapsed" !== o.attr("data-collapse-state") &&
                      t.length &&
                      t[0].click();
                  })(n(this));
                }),
                e.length && e[0].click());
            }));
      }));
  });
})(jQuery);
