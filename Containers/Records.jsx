import React, {Component} from 'react';
import {
  Table, 
  TableBody, 
  TableHeader, 
  TableHeaderColumn, 
  TableRow, 
  TableRowColumn,
} from 'material-ui/Table';
import Submit from './Submit';

class Records extends Component {
  constructor(props) {
    super(props);
    this.headings = {
      vaccine: 'Vaccine',
      date: 'Date Given',
      doctor: 'Administered By',
      nextDate: 'Next Date'
    };
    this.state = {
      data: [
        {
          vaccine: {
            name: "Hepatitis B",
            details: 'HepB Hlb-HepB HepA-HepB DTaP-HepB-IPV'.split(' '),
          },
          date: '12/31/1999',
          doctor: 'Herbert Kevorkian',
          nextDate: '12/31/2010'
        },
        {
          vaccine: { 
            name: 'Diptheria',
            details: 'DTaP DTP DT Td Tdap DTaP-HJepB-IPV OTaP IPV/Hlb DTaP-IPV DTaP/Hlb'.split(' '),
            additional: 'boosters',
          },
          date: '03/16/1998',
          doctor: 'Derpus McHerpleblorp',
          nextDate: '12/30/2010'
        },
        {
          vaccine: {
            name: 'Haemophilus Influenzae type b',
            details: 'Hlb Hlb-HepB DTaP-IPV/Hlb DTaP/Hlb'.split(' '),
          },
          date: '12/1/1986',
          doctor: 'Martha Von Choogus',
          nextDate: '03/12/1991',
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Table>
          <TableHeader 
            adjustForCheckbox={false}
            displaySelectAll={false}
          >
            <TableRow>
              {Object.keys(this.headings).map((key) => 
                <TableHeaderColumn>{this.headings[key]}</TableHeaderColumn>
              )}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
              {this.state.data.map((record) => 
                <TableRow>
                  {Object.keys(record).map((column) => 
                   (column === 'vaccine') ?
                     <TableRowColumn>{record[column].name}</TableRowColumn> :
                     <TableRowColumn>{record[column]}</TableRowColumn> 
                  )}
                </TableRow>
              )}
          </TableBody>
        </Table>
        <Submit/>
      </div>
    );
  }
}

export default Records;