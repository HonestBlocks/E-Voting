// GET_MANY -> results
// CREATE -> Election(compile and deploy)
// CREATE -> register candidates
// CREATE -> register voters
// CREATE -> set candidates arr

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = require("query-string");
var react_admin_1 = require("react-admin");
const Web3 =  require('web3'); 

const web3 = new Web3('http://localhost:7545');
const Contractaddress = "0x1821458fe99acb60b1baaab7ba4aeb12c620f430"
const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates_arr",
		"outputs": [
			{
				"name": "party",
				"type": "string"
			},
			{
				"name": "candidate_id",
				"type": "address"
			},
			{
				"name": "votes_recv",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "toVoterr",
				"type": "string"
			}
		],
		"name": "giveRightToVote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_length",
				"type": "uint256"
			}
		],
		"name": "set_candidates_arr_len",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_candidate_ids",
				"type": "string"
			},
			{
				"name": "_party",
				"type": "string"
			}
		],
		"name": "registerCandidates",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]

const mycontract = new web3.eth.contract(ABI, Contractaddress)


/**
 * Maps react-admin queries to a json-server powered REST API
 *
 * @see https://github.com/typicode/json-server
 * @example
 * GET_LIST     => GET http://my.api.url/posts?_sort=title&_order=ASC&_start=0&_end=24
 * GET_ONE      => GET http://my.api.url/posts/123
 * GET_MANY     => GET http://my.api.url/posts/123, GET http://my.api.url/posts/456, GET http://my.api.url/posts/789
 * UPDATE       => PUT http://my.api.url/posts/123
 * CREATE       => POST http://my.api.url/posts/123
 * DELETE       => DELETE http://my.api.url/posts/123
 */
exports.default = (function (apiUrl, httpClient) {
    if (httpClient === void 0) { httpClient = react_admin_1.fetchUtils.fetchJson; }
    /**
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The data request params, depending on the type
     * @returns {Object} { url, options } The HTTP request parameters
     */
    var convertDataRequestToHTTP = function (type, resource, params) {
        var _a;
        var url = '';
        var options = {};
        switch (type) {
            case react_admin_1.GET_LIST: {
                var _b = params.pagination, page = _b.page, perPage = _b.perPage;
                var _c = params.sort, field = _c.field, order = _c.order;
                var query = __assign({}, react_admin_1.fetchUtils.flattenObject(params.filter), { _sort: field, _order: order, _start: (page - 1) * perPage, _end: page * perPage });
                url = apiUrl + "/" + resource + "?" + query_string_1.stringify(query);
                break;
            }
            // case react_admin_1.GET_ONE:
            //     url = apiUrl + "/" + resource + "/" + params.id;
            //     break;
            // case react_admin_1.GET_MANY_REFERENCE: {
            //     var _d = params.pagination, page = _d.page, perPage = _d.perPage;
            //     var _e = params.sort, field = _e.field, order = _e.order;
            //     var query = __assign({}, react_admin_1.fetchUtils.flattenObject(params.filter), (_a = {}, _a[params.target] = params.id, _a._sort = field, _a._order = order, _a._start = (page - 1) * perPage, _a._end = page * perPage, _a));
            //     url = apiUrl + "/" + resource + "?" + query_string_1.stringify(query);
            //     break;
            // }
            // case react_admin_1.UPDATE:
            //     url = apiUrl + "/" + resource + "/" + params.id;
            //     options.method = 'PUT';
            //     options.body = JSON.stringify(params.data);
            //     break;
            // case react_admin_1.CREATE:
            //     url = apiUrl + "/" + resource;
            //     options.method = 'POST';
            //     options.body = JSON.stringify(params.data);
            //     break;
            // case react_admin_1.DELETE:
            //     url = apiUrl + "/" + resource + "/" + params.id;
            //     options.method = 'DELETE';
            //     break;
            // case react_admin_1.GET_MANY: {
            //     var query = {
            //         id: params.ids,
            //     };
            //     url = apiUrl + "/" + resource + "?" + query_string_1.stringify(query);
            //     break;
            // }
            default:
                throw new Error("Unsupported fetch action type " + type);
        }
        // return { url: url, options: options };
    };
    /**
     * @param {Object} response HTTP response from fetch()
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The data request params, depending on the type
     * @returns {Object} Data response
     */
    var convertHTTPResponse = function (response, type, resource, params) {
        var headers = response.headers, json = response.json;
        switch (type) {
            case react_admin_1.GET_LIST:
            case react_admin_1.GET_MANY_REFERENCE:
                if (!headers.has('x-total-count')) {
                    throw new Error('The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?');
                }
                return {
                    data: json,
                    total: parseInt(headers
                        .get('x-total-count')
                        .split('/')
                        .pop(), 10),
                };
            case react_admin_1.CREATE:
                return { data: __assign({}, params.data, { id: json.id }) };
            default:
                return { data: json };
        }
    };
    /**
     * @param {string} type Request type, e.g GET_LIST
     * @param {string} resource Resource name, e.g. "posts"
     * @param {Object} payload Request parameters. Depends on the request type
     * @returns {Promise} the Promise for a data response
     */
    return function (type, resource, params) {
        // json-server doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
        if (type === react_admin_1.UPDATE_MANY) {
            return Promise.all(params.ids.map(function (id) {
                return httpClient(apiUrl + "/" + resource + "/" + id, {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                });
            })).then(function (responses) { return ({
                data: responses.map(function (response) { return response.json; }),
            }); });
        }
        // json-server doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
        if (type === react_admin_1.DELETE_MANY) {
            return Promise.all(params.ids.map(function (id) {
                return httpClient(apiUrl + "/" + resource + "/" + id, {
                    method: 'DELETE',
                });
            })).then(function (responses) { return ({
                data: responses.map(function (response) { return response.json; }),
            }); });
        }
        var _a = convertDataRequestToHTTP(type, resource, params), url = _a.url, options = _a.options;
        return httpClient(url, options).then(function (response) {
            return convertHTTPResponse(response, type, resource, params);
        });
    };
});
