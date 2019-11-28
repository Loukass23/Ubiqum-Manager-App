/**
 * User Management
 */
interface Student {
    id: string,
    name: string,
    surname: string,
    email: string,
    avatar?: string,
    program: string,
    cohort: string,
    city: string,
    startDate: date,
    endDate?: Date,
    jobCenter?: any,
    progress: Progress
    gitHub?: string,
    alumni?: boolean,
    about?: string,
    // calendly?: string,

}

interface Progress {
    module: any,
    sprint: any,
    day: any,
    refDay: any
}
type Students = Array<Student>

interface Mentor {
    id: string,
    name: string,
    startDate: date,
    surname: string,
    // cohort?: string,
    avatar: string,
    program: string,
    city: string,
    email: string,
    calendly: string,
    about?: string,
    alumni?: boolean,
}

type Mentors = Array<Mentor>

type User = Student | Mentor

type Users = Array<User>

interface Allumnus {
    name?: string,
    dob?: string,
    country?: string,
    program?: string,
    education?: string,
    degree?: string,
    related?: string,
    professional?: string,
    workType?: string,
    workTime?: string,
    previousExt?: string,
}
type Allumni = Array<Allumnus>


/**
 * CONTEXT
 */

interface AuthContextInterface {
    user: User,
    isAuthenticated: Boolean,
    userType: string

}
interface UbiqumContextInterface {
    mentors: Mentors,
    students: Students,
    allUsers: Users,
    allumni: Allumni
}

interface ThemeContextInterface {
    theme: any,
    setColors: any
}

/**
 * MUI Overides bug workaroung
 */


type Overrides = {
    [Name in keyof ComponentNameToClassKey]?: Partial<StyleRules<ComponentNameToClassKey[Name]>>
};

interface ComponentNameToClassKey {
    MUIDataTableToolbar: any,
    MuiDataTableHead: any,
    MUIDataTableHeadCell: any,
    MuiToolbar: any,
    MUIDataTable: any,
    MUIDataTableToolbarSelect: any,
    MUIDataTableFilter: any,
    MUIDataTableBodyCell: any,
    MuiAppBar: AppBarClassKey;
    MuiAvatar: AvatarClassKey;
    MuiBackdrop: BackdropClassKey;
    MuiBadge: BadgeClassKey;
    MuiBottomNavigation: BottomNavigationClassKey;
    MuiBottomNavigationAction: BottomNavigationActionClassKey;
    MuiBreadcrumbs: BreadcrumbsClassKey;
    MuiButton: ButtonClassKey;
    MuiButtonBase: ButtonBaseClassKey;
    MuiButtonGroup: ButtonGroupClassKey;
    MuiCard: CardClassKey;
    MuiCardActionArea: CardActionAreaClassKey;
    MuiCardActions: CardActionsClassKey;
    MuiCardContent: CardContentClassKey;
    MuiCardHeader: CardHeaderClassKey;
    MuiCardMedia: CardMediaClassKey;
    MuiCheckbox: CheckboxClassKey;
    MuiChip: ChipClassKey;
    MuiCircularProgress: CircularProgressClassKey;
    MuiCollapse: CollapseClassKey;
    MuiContainer: ContainerClassKey;
    MuiCssBaseline: CssBaselineClassKey;
    MuiDialog: DialogClassKey;
    MuiDialogActions: DialogActionsClassKey;
    MuiDialogContent: DialogContentClassKey;
    MuiDialogContentText: DialogContentTextClassKey;
    MuiDialogTitle: DialogTitleClassKey;
    MuiDivider: DividerClassKey;
    MuiDrawer: DrawerClassKey;
    MuiExpansionPanel: ExpansionPanelClassKey;
    MuiExpansionPanelActions: ExpansionPanelActionsClassKey;
    MuiExpansionPanelDetails: ExpansionPanelDetailsClassKey;
    MuiExpansionPanelSummary: ExpansionPanelSummaryClassKey;
    MuiFab: FabClassKey;
    MuiFilledInput: FilledInputClassKey;
    MuiFormControl: FormControlClassKey;
    MuiFormControlLabel: FormControlLabelClassKey;
    MuiFormGroup: FormGroupClassKey;
    MuiFormHelperText: FormHelperTextClassKey;
    MuiFormLabel: FormLabelClassKey;
    MuiGrid: GridClassKey;
    MuiGridList: GridListClassKey;
    MuiGridListTile: GridListTileClassKey;
    MuiGridListTileBar: GridListTileBarClassKey;
    MuiIcon: IconClassKey;
    MuiIconButton: IconButtonClassKey;
    MuiInput: InputClassKey;
    MuiInputAdornment: InputAdornmentClassKey;
    MuiInputBase: InputBaseClassKey;
    MuiInputLabel: InputLabelClassKey;
    MuiLinearProgress: LinearProgressClassKey;
    MuiLink: LinkClassKey;
    MuiList: ListClassKey;
    MuiListItem: ListItemClassKey;
    MuiListItemAvatar: ListItemAvatarClassKey;
    MuiListItemIcon: ListItemIconClassKey;
    MuiListItemSecondaryAction: ListItemSecondaryActionClassKey;
    MuiListItemText: ListItemTextClassKey;
    MuiListSubheader: ListSubheaderClassKey;
    MuiMenu: MenuClassKey;
    MuiMenuItem: MenuItemClassKey;
    MuiMobileStepper: MobileStepperClassKey;
    MuiNativeSelect: NativeSelectClassKey;
    MuiOutlinedInput: OutlinedInputClassKey;
    MuiPaper: PaperClassKey;
    MuiPopover: PopoverClassKey;
    MuiRadio: RadioClassKey;
    MuiSelect: SelectClassKey;
    MuiSlider: SliderClassKey;
    MuiSnackbar: SnackbarClassKey;
    MuiSnackbarContent: SnackbarContentClassKey;
    MuiStep: StepClasskey;
    MuiStepButton: StepButtonClasskey;
    MuiStepConnector: StepConnectorClasskey;
    MuiStepContent: StepContentClasskey;
    MuiStepIcon: StepIconClasskey;
    MuiStepLabel: StepLabelClasskey;
    MuiStepper: StepperClasskey;
    MuiSvgIcon: SvgIconClassKey;
    MuiSwitch: SwitchClassKey;
    MuiTab: TabClassKey;
    MuiTable: TableClassKey;
    MuiTableBody: TableBodyClassKey;
    MuiTableCell: TableCellClassKey;
    MuiTableFooter: TableFooterClassKey;
    MuiTableHead: TableHeadClassKey;
    MuiTablePagination: TablePaginationClassKey;
    MuiTableRow: TableRowClassKey;
    MuiTableSortLabel: TableSortLabelClassKey;
    MuiTabs: TabsClassKey;
    MuiTextField: TextFieldClassKey;
    MuiToolbar: ToolbarClassKey;
    MuiTooltip: TooltipClassKey;
    MuiTouchRipple: TouchRippleClassKey;
    MuiTypography: TypographyClassKey;
}