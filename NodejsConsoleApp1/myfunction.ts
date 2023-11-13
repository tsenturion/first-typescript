const buildModal = (text: string, status: ModalStatus): { text: string, status: ModalStatus } => {
    return {
        text: text,
        status: status,
    };
};
enum ModalStatus {
    Opened = '1',
    Closed = '2',
};

export { ModalStatus };
export default buildModal;
