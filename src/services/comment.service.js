export const getComments = async () => {
  try {
    const response = await fetch("http://localhost:4000/comments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const response = await fetch(
      `http://localhost:4000/comments/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      throw new Error("Failed to delete comment");
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
};
