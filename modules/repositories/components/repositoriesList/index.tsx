import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import FavoriteIcon from "@/public/FavoriteIcon";
import Style from "./style";
import SearchField from "./components/Search";


// Utility function to safely access localStorage
export const getLocalStorage = (key: any) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};

// Utility function to safely set localStorage
const setLocalStorage = (key: any, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

const updateBookmarks = (item: any) => {
  const bookmarksString = getLocalStorage("bookmarks");
  const bookmarks = bookmarksString ? JSON.parse(bookmarksString) : [];
  const bookmarkIndex = bookmarks.findIndex((b: any) => b.id === item.id);

  if (bookmarkIndex > -1) {
    bookmarks.splice(bookmarkIndex, 1);
  } else {
    bookmarks.push({ ...item });
  }

  setLocalStorage("bookmarks", JSON.stringify(bookmarks));
  return bookmarks;
};

// Function to handle changing item status and updating state
const handleChangeItemStatus = (item: any, result: any, setMyResult: any) => {
  const updatedItems = result.map((resultItem: any) => {
    if (resultItem.id === item.id) {
      const newItem = {
        ...resultItem,
        isLike: !resultItem.isLike,
      };
      updateBookmarks(newItem);
      return newItem;
    }
    return resultItem;
  });

  setMyResult(updatedItems);
};

export default function RepositoriesList(props: any) {
  const router = useRouter();
  const { query } = router;
  const [result, setMyResult] = useState([]);
 
  useEffect(() => {
    const initialData = props?.initialData?.items || [];
    const bookmarksString = getLocalStorage("bookmarks");
    const bookmarks = bookmarksString ? JSON.parse(bookmarksString) : [];

    const bookmarkedItems = initialData.map((item: any) => {
      const isBookmarked = bookmarks.some((b: any) => b.id === item.id);
      return {
        ...item,
        isLike: isBookmarked,
      };
    });

    setMyResult(bookmarkedItems);
  }, [props?.initialData?.items]);

 



  const construct_records = (list: any) => {
    return list?.map((item: any) => ({
      id: item?.id,
      name: item.name,
      owner: item?.owner?.login,
      description: item?.description,
      stars: item.stargazers_count,
      isLike: item.isLike || false,
    }));
  };

  const tableData = {
    actions: [
      {
        icon: (item: any) => <FavoriteIcon isLike={item.isLike} />,
        action: (item: any) => {
          handleChangeItemStatus(item, result, setMyResult);
        },
      },
    ],
    dataList: construct_records(result),
    tableColumns: [
      { key: "name", label: "Name" },
      { key: "owner", label: "Owner" },
      { key: "description", label: "Description",style:{ width: "30%"} },
      { key: "stars", label: "Number of Stars", style:{textAlign:'center'} },
    ],
  };

  const paginationHook = (currentPage: any) => {
    const updatedQuery = {
      ...router.query,
      page: currentPage,
    };

    // Push the new route with updated query parameters
    return router.push({
      pathname: "/",
      query: updatedQuery,
    });
  };

  return (
    <Style>

      <div className="profile-head">
        <h4>Repositories</h4>
      </div>
    <SearchField/>
      <section className="table-wrapper">
        <Table {...tableData} className="company-table" />
      </section>
        <Pagination
          currentPage={query.page || 1}
          pages={props.initialData.totalPages}
          emit={paginationHook}
        />
    </Style>
  );
}
