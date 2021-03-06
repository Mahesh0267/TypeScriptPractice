"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const WinsAnalysis_1 = require("./analyzer/WinsAnalysis");
const Summary_1 = require("./Summary");
const HTMLReport_1 = require("./HTMLReport");
//create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//create an instance of match pass something to satisfied
//the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HTMLReport_1.HTMLReport());
summary.buildAndPrintReport(matchReader.matches);
