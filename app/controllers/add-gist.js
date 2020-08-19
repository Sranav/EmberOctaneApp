import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import GistsInfoService from "../services/gists-info";

export default class AddGistController extends Controller {
  @service gistsInfo;

  @action
  addFile(body, description, fileName) {
    this.gistsInfo.addGist({ body, description, fileName });
    this.transitionToRoute("index");
  }
}
