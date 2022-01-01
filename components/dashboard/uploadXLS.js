import React, { useContext, Component } from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default class Upload extends Component {
    
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste os arquivos XLS aqui</UploadMessage>;
    }
    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }
    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };
  render() {
    const { uploadXLS } = this.props;    
    return (      
      <Box
      sx={{
        marginTop: 2,
        alignItems: 'center',
      }}
      >
        <Typography variant="h6" gutterBottom component="div" align='center'>
            Vendas
        </Typography>
        <Dropzone acceptedFiles=".xlsx, .xls" onDropAccepted={uploadXLS}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              {this.renderDragMessage(isDragActive, isDragReject)}
            </DropContainer>
          )}
        </Dropzone>
      </Box>
    );
  }
}
