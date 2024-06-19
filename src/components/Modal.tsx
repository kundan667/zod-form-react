function Modal() {

    return (
        <dialog id="my_modal" className="modal">
            <div className="modal-box grid content-center justify-items-center">
                <img src="/assets/checklist.png" alt="check" width={120} />
                <p className="py-4">Your account has been created successfully</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default Modal
