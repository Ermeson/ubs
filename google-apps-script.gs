/**
 * Cole este código em Extensões > Apps Script, dentro da planilha do Google Sheets.
 * Depois implante como Web App (veja o passo a passo enviado junto com este arquivo).
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Respostas")
    || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;

  sheet.appendRow([
    new Date(),
    data.recepcao || "",
    data.atendimento_ubs || "",
    data.tempo_espera || "",
    data.estrutura_fisica || "",
    data.equipe_enfermagem || "",
    data.equipe_medica || "",
    data.equipe_odontologica || "",
    data.motivo_visita || "",
    data.recomendaria || "",
    data.sugestao_melhoria || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
