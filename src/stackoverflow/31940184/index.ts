import $ from "jquery";

export function myDialogMethod(title, message, buttonLabel, buttonCallback) {
  $("#DialogMessage").html(message);

  ($("#myDialog") as any).dialog({
    modal: true,
    title: title,
    buttons: [
      {
        text: buttonLabel,
        click: function() {
          ($(this) as any).dialog("close");
          buttonCallback();
        },
      },
    ],
  });
}
