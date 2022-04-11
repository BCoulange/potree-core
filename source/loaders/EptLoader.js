
import {PointCloudEptGeometry, PointCloudEptGeometryNode} from "../pointcloud/geometries/PointCloudEptGeometry.js";
import { XHRFactory } from "../XHRFactory.js";

export class EPTLoader
{
	static async load(file, callback)
	{
		var response = await XHRFactory.fetch(file);
		var json = await response.json();
		var url = file.substr(0, file.lastIndexOf("ept.json"));

		var geometry = new PointCloudEptGeometry(url, json);
		var root = new PointCloudEptGeometryNode(geometry);
		geometry.root = root;
		geometry.root.load();

		callback(geometry);
	}
}
