import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class GistsInfoService extends Service {
  get numberOfGists() {
    return this.gists.length;
  }

  @tracked gists = [
    {
      fileName: "example.hbs",
      description: "just an example",
      body: "<p>An <strong>example</strong> for {{username}}</p>",
    },

    {
      fileName: "example.hbs",
      description: "2nd example",
      body: `
                import Controller from "@ember/controller";
                import {
                  action
                } from "@ember/object";
                import {
                  inject as service
                } from "@ember/service";

                export default class AddGistController extends Controller {
                  @service gistsInfo;
                }
`,
    },
    {
      fileName: "example.hbs",
      description: "3rd example",
      body: `
                import Controller from "@ember/controller";
                import {
                  action
                } from "@ember/object";
                import {
                  inject as service
                } from "@ember/service";

                export default class AddGistController extends Controller {
              @service gistsInfo;
                }
`,
    },
    {
      fileName: "fourth-example.hbs",
      description: "some hbs",
      body: `good day for sme {{variable}}`,
    },
  ];
  addGist(gist) {
    this.gists.addObject(gist);
  }
}
