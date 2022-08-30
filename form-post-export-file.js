var params = { "schoolIds": vm.selectedIds }

jq('#form_1').remove();
var form = document.createElement("form");
form.setAttribute("id", "form_1");
form.setAttribute("method", "post");
form.setAttribute("action", window.location.origin + "/api/SomeController/ExportExcelAction");
form.setAttribute("target", '_blank');
for (var key in params) {
    if (params.hasOwnProperty(key)) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);

        form.appendChild(hiddenField);
    }
}

document.body.appendChild(form);
form.submit();
