// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @param {!string} name
 * @param {!string} content
 */
function saveFile(name, content) {
    //noinspection JSUnresolvedVariable
    if (navigator.msSaveBlob) {
        //noinspection JSUnresolvedFunction
        navigator.msSaveBlob(new Blob([content], {type: 'text/html;charset=UTF-8'}), name);
        return;
    }

    let anchor = document.createElement("a");
    //noinspection JSUnresolvedVariable,JSUnresolvedFunction
    anchor.href = window.URL !== undefined ?
        window.URL.createObjectURL(new Blob([content], {type: 'text/html;charset=UTF-8'})) :
        'data:application/octet-stream,' + encodeURI(moddedHtml);
    anchor.download = name;
    try {
        //noinspection XHTMLIncompatabilitiesJS
        document.body.appendChild(anchor);
        anchor.click();
    } finally {
        //noinspection XHTMLIncompatabilitiesJS
        document.body.removeChild(anchor);
    }
}

export {saveFile};
