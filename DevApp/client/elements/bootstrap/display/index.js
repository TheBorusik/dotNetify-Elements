import { Alert as _Alert } from './Alert';

import { Alert } from '../../../elements/display/Alert';
import { DataGrid, GridColumn } from '../../../elements/display/DataGrid';
import { Label } from '../../../elements/display/Label';
import { Markdown, MarkdownText } from '../../../elements/display/Markdown';
import { MarkdownTOC } from '../../../elements/display/MarkdownTOC';

import ReactDataGrid from 'react-data-grid';

Alert.componentTypes.AlertComponent = _Alert;
DataGrid.componentTypes.DataGridComponent = ReactDataGrid;

export { Alert, DataGrid, GridColumn, Label, Markdown, MarkdownText, MarkdownTOC };
