export type ModalType = {
    open: boolean;
    setOpen: (open: boolean) => void;
};
export type deleteModalType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    id: string;
};
export type EditModalType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    data: DatasType;
    setDatas: (newData: DataType | any) => void
};

export type DataType = {
    fName: string;
    lName: string;
    country: string;
    birthday: string;
    position: string;
    job: string;
    salary: string;
    isMarried: boolean;
};

export type DatasType = {
    id: string;
    fName: string;
    lName: string;
    country: string;
    birthday: string;
    position: string;
    job: string;
    salary: string;
    isMarried: boolean;
}