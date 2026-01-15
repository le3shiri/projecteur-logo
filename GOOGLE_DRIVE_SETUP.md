# Intégration Google Drive pour les Images

Pour recevoir les images directement dans un dossier Google Drive et avoir le lien dans votre Google Sheet, suivez ces étapes :

## Étape 1 : Créer un dossier Google Drive
1. Allez sur [Google Drive](https://drive.google.com).
2. Créez un nouveau dossier (ex: `Logos Clients`).
3. Ouvrez ce dossier.
4. Regardez l'URL dans votre navigateur. Elle ressemble à ceci :
   `https://drive.google.com/drive/u/0/folders/1aBcD_EfGhIjKlMnOpQrStUvWxYz12345`
5. Copiez la partie alphanumérique après `folders/`. C'est votre **Folder ID**.
   (Exemple: `1aBcD_EfGhIjKlMnOpQrStUvWxYz12345`)

## Étape 2 : Mettre à jour le Google Apps Script
1. Retournez dans votre Google Sheet > **Extensions** > **Apps Script**.
2. Remplacez **TOUT** le code existant par celui-ci :

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Configuration du dossier Google Drive (REMPLACEZ L'ID CI-DESSOUS)
    var FOLDER_ID = "1YdxZ65tr9NSeHVHQStK_9efcKzUDv97S"; 
    
    var fileUrl = "Aucun fichier";

    // Traitement de l'image
    if (data.logoBase64 && data.logoFileName) {
      try {
        var folder = DriveApp.getFolderById(FOLDER_ID);
        var contentType = data.logoFileType || "image/png";
        // Convertir la base64 (supprimer l'en-tête data:image/...)
        var encoded = data.logoBase64.split(",")[1];
        var decoded = Utilities.base64Decode(encoded);
        var blob = Utilities.newBlob(decoded, contentType, data.logoFileName);
        
        var file = folder.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); // Rendre visible
        fileUrl = file.getUrl();
      } catch (err) {
        fileUrl = "Erreur Upload: " + err.toString();
      }
    }

    sheet.appendRow([
      data.date,
      data.fullName,
      data.company,
      data.phone,
      data.address,
      data.product,
      data.quantity,
      data.additionalProducts,
      data.message,
      fileUrl // On met l'URL Drive ici au lieu du nom de fichier
    ]);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success", "file": fileUrl }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

3. **IMPORTANT** : Collez votre ID de dossier à la ligne `var FOLDER_ID = "..."`.
4. Sauvegardez (`Ctrl+S`).
5. **Redéployez** : Cliquez sur **Deploy** > **Manage deployments** > **Edit** (icône crayon) > **New version** > **Deploy**.
   *Si vous ne créez pas une "New version", le code ne se mettra pas à jour !*

## Étape 3 : Le code du site
Je vais mettre à jour votre fichier `contact-form.tsx` automatiquement pour envoyer l'image au script.
