var params = { "selectedIds": selectedIds }

var httpPromise = $http.post("/api/SomeController/ExportFile", params, { responseType: 'arraybuffer' });
httpPromise.then(response => this.saveFile(new Blob([response.data], { type: response.headers('Content-Type') }), "SomeFileName"));

var saveFile = function (blob, fileName) {
  var fileURL = URL.createObjectURL(blob);
  window.open(fileURL);

  if (window.navigator.msSaveOrOpenBlob) { // For IE:
    navigator.msSaveBlob(blob, fileName);
  } else { // For other browsers:
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(link.href);

    window.open(url, '_blank');
  }
}
