import { FileInfo } from '../models/FileInfo';

export function getBaseMarkup(infos: FileInfo[], hrefBase: string) {
  const rowsMarkup = infos
    .map(({ title, transName }) => {
      return `<tr>
                <td>${title}</td>
                <td><a href="${hrefBase}/${transName}" target="_blank">Открыть</a></td>
                <td><a href="${hrefBase}/${transName}.sig">Скачать</a></td>
              </tr>`;
    })
    .join('');

  return `<table class="unborder-table" styles="width: 100%">
            <thead>
              <tr style="font-size: 16px;">
                  <th style="font-weight: normal;">Наименование</th>
                  <th style="min-width: 120px; font-weight: normal;">Открыть файл</th>
                  <th style="min-width: 170px; font-weight: normal;">Скачать с электронной подписью</th>
              </tr>
            </thead>
            <tbody>
              ${rowsMarkup}
            </tbody>
          </table>`;
}
