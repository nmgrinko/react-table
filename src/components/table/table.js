import React from 'react';
import { connect } from 'react-redux';

import Styles from './table-styles';
import TableFrame from './table-frame';


const Table = ({ props }) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Users',
                columns: [
                    {
                        Header: 'Name method',
                        accessor: 'name_method',  
                    },
                    {
                        Header: 'URL',
                        accessor: 'url',
                    },
                ],
            }
        ],
        []
    );

    const dataR = { props }.props;

    const dataX = () => {
    let data = [];

        if (dataR === undefined) {
            return data 
        } else {
            return data = { props }.props
        };
    };

    return (
        <Styles>
            <TableFrame columns = { columns } data = { dataX() } />
        </Styles>
    )
}

const mapStateToProps = (state) => {
    return {
        props: state.props
      
    }
};



export default connect(mapStateToProps)(Table);


