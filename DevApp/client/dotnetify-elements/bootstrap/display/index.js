import { Alert as _Alert } from './Alert';

import { Alert } from '../../display/Alert';
import { DataGrid, GridColumn } from '../../display/DataGrid';
import { Label } from '../../display/Label';
import { Markdown, MarkdownText } from '../../display/Markdown';
import { MarkdownTOC } from '../../display/MarkdownTOC';

import ReactDataGrid from 'react-data-grid';

Alert.componentTypes.AlertComponent = _Alert;
DataGrid.componentTypes.DataGridComponent = ReactDataGrid;

export { Alert, DataGrid, GridColumn, Label, Markdown, MarkdownText, MarkdownTOC };
