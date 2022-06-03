import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTarget/ConsoleReport';
import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { Summary } from './Summary';
import { HTMLReport } from './HTMLReport';

//create an object that satisfies the 'DataReader' interface

const csvFileReader = new CsvFileReader('football.csv');

//create an instance of match pass something to satisfied
//the 'DataReader' interface

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new HTMLReport());

summary.buildAndPrintReport(matchReader.matches);
