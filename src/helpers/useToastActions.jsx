import { toast } from "react-toastify";

const useToastActions = () => {
  const showConfirmation = ({ title, onConfirm, onCancel }) => {
    const confirmToast = ({ closeToast }) => (
      <div>
        <p>{title}</p>
        <div className="flex justify-center gap-2 mt-2">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded"
            onClick={() => {
              onConfirm(); // Llama la acción confirmada
              closeToast(); // Cierra el toast
            }}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => {
              onCancel && onCancel(); // Llama la acción cancelada, si existe
              closeToast(); // Cierra el toast
            }}
          >
            No
          </button>
        </div>
      </div>
    );

    toast(confirmToast, {
      position: "top-right",
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      className: "custom-toast",
    });
  };

  const addNotification = () => {
    toast.success("Character was added to favorites", {
      position: "bottom-center",
      className: "custom-toast",
    });
  };

  return { addNotification, showConfirmation };
};

export default useToastActions;
