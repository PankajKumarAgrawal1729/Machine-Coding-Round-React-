import { useMemo } from "react";
import { Container, Table } from "../index";

const getData = () => {
  const data = [
    {
      id: "75hqPk6pq5g",
      start: "2023-07-19T13:16:33Z",
      title: "Flutter Windows Installation",
      url: "https://i.ytimg.com/vi/75hqPk6pq5g/default.jpg",
      end: "2023-07-30T13:16:33Z",
      price: "₹ 5850",
      status: "Published",
    },
    {
      id: "dtzfTePFKgM",
      start: "2023-07-18T16:30:07Z",
      title: "FreeAPI local setup with npm",
      url: "https://i.ytimg.com/vi/dtzfTePFKgM/default.jpg",
      end: "2023-08-13T16:30:07Z",
      price: "₹ 876",
      status: "Unpublished",
    },
    {
      id: "xJq0EQMFGyg",
      start: "2023-07-18T12:33:40Z",
      title: "Open Source Project Launch | FreeAPI.app",
      url: "https://i.ytimg.com/vi/xJq0EQMFGyg/default.jpg",
      end: "2023-08-05T12:33:40Z",
      price: "₹ 1524",
      status: "Published",
    },
    {
      id: "zg06ec5arCs",
      start: "2023-07-12T12:20:42Z",
      title: "Learn to build file based routing from scratch like Nextjs",
      url: "https://i.ytimg.com/vi/zg06ec5arCs/default.jpg",
      end: "2023-08-08T12:20:42Z",
      price: "₹ 143",
      status: "Unpublished",
    },
    {
      id: "fyEA1R4lFyQ",
      start: "2023-07-06T11:41:53Z",
      title: "Nextjs componets to talk to Appwrite",
      url: "https://i.ytimg.com/vi/fyEA1R4lFyQ/default.jpg",
      end: "2023-08-03T11:41:53Z",
      price: "₹ 1514",
      status: "Published",
    },
    {
      id: "eaQc7vbV4po",
      start: "2023-07-02T11:59:15Z",
      title: "Complete Nextjs fullstack Authentication course",
      url: "https://i.ytimg.com/vi/eaQc7vbV4po/default.jpg",
      end: "2023-07-24T11:59:15Z",
      price: "₹ 7974",
      status: "Unpublished",
    },
    {
      id: "_BqkCRgCdng",
      start: "2023-07-01T12:45:03Z",
      title: "User verification email in nextjs",
      url: "https://i.ytimg.com/vi/_BqkCRgCdng/default.jpg",
      end: "2023-07-28T12:45:03Z",
      price: "₹ 7875",
      status: "Published",
    },
    {
      id: "UgRw9lhhWDk",
      start: "2023-06-30T16:00:24Z",
      title: "Middleware in nextjs | Nextjs fullstack course",
      url: "https://i.ytimg.com/vi/UgRw9lhhWDk/default.jpg",
      end: "2023-07-23T16:00:24Z",
      price: "₹ 2741",
      status: "Unpublished",
    },
    {
      id: "2RxaJrltJKo",
      start: "2023-06-30T15:30:00Z",
      title: "NextJS fullstack course | Signup and login",
      url: "https://i.ytimg.com/vi/2RxaJrltJKo/default.jpg",
      end: "2023-07-15T15:30:00Z",
      price: "₹ 6783",
      status: "Published",
    },
    {
      id: "iPGXk-i-VYU",
      start: "2023-06-30T12:45:03Z",
      title: "Nextjs Full stack course",
      url: "https://i.ytimg.com/vi/iPGXk-i-VYU/default.jpg",
      end: "2023-07-16T12:45:03Z",
      price: "₹ 1517",
      status: "Unpublished",
    },
    {
      id: "8l691BQ-RGc",
      start: "2023-06-25T15:51:13Z",
      title: "React native windows installation",
      url: "https://i.ytimg.com/vi/8l691BQ-RGc/default.jpg",
      end: "2023-07-09T15:51:13Z",
      price: "₹ 9867",
      status: "Published",
    },
    {
      id: "y2Fz0dkI4v8",
      start: "2023-06-12T16:50:08Z",
      title:
        "This will change DSA and Leetcode preparation forever | Pieces for developers",
      url: "https://i.ytimg.com/vi/y2Fz0dkI4v8/default.jpg",
      end: "2023-07-06T16:50:08Z",
      price: "₹ 1172",
      status: "Unpublished",
    },
    {
      id: "rWv0zzEYB2w",
      start: "2023-06-07T12:14:23Z",
      title: "Using Appwrite service with custom context in React Native",
      url: "https://i.ytimg.com/vi/rWv0zzEYB2w/default.jpg",
      end: "2023-07-05T12:14:23Z",
      price: "₹ 5512",
      status: "Published",
    },
    {
      id: "cv-6bAeYsOY",
      start: "2023-06-05T13:39:26Z",
      title: "Pieces: An Essential Tool for the Modern Developer's Toolkit",
      url: "https://i.ytimg.com/vi/cv-6bAeYsOY/default.jpg",
      end: "2023-06-25T13:39:26Z",
      price: "₹ 8980",
      status: "Unpublished",
    },
    {
      id: "EQwmQLU1S6I",
      start: "2023-05-23T12:30:05Z",
      title: "Let's kill all programming language | playlist intro",
      url: "https://i.ytimg.com/vi/EQwmQLU1S6I/default.jpg",
      end: "2023-06-19T12:30:05Z",
      price: "₹ 6220",
      status: "Published",
    },
    {
      id: "zlojM-Jbux4",
      start: "2023-05-22T15:30:14Z",
      title: "Complete Appwrite authentication walkthrough",
      url: "https://i.ytimg.com/vi/zlojM-Jbux4/default.jpg",
      end: "2023-06-18T15:30:14Z",
      price: "₹ 871",
      status: "Unpublished",
    },
    {
      id: "0Xde4eSqcmI",
      start: "2023-05-22T12:30:02Z",
      title: "Is twitter dead ?",
      url: "https://i.ytimg.com/vi/0Xde4eSqcmI/default.jpg",
      end: "2023-06-17T12:30:02Z",
      price: "₹ 1494",
      status: "Published",
    },
    {
      id: "VeSUgWHbphk",
      start: "2023-05-22T09:14:24Z",
      title:
        "Building a React native app with Appwrite authentication | App demo",
      url: "https://i.ytimg.com/vi/VeSUgWHbphk/default.jpg",
      end: "2023-06-20T09:14:24Z",
      price: "₹ 5833",
      status: "Unpublished",
    },
    {
      id: "zLdcmJDIXt8",
      start: "2023-05-16T13:01:32Z",
      title: "Get Postman in your VSCode | 1st look",
      url: "https://i.ytimg.com/vi/zLdcmJDIXt8/default.jpg",
      end: "2023-06-15T13:01:32Z",
      price: "₹ 4604",
      status: "Published",
    },
    {
      id: "daURe-AI5qQ",
      start: "2023-05-10T13:30:15Z",
      title:
        "Code Like a Pro | Setting Up Your MacBook Air M2 for Development in 2023",
      url: "https://i.ytimg.com/vi/daURe-AI5qQ/default.jpg",
      end: "2023-05-20T13:30:15Z",
      price: "₹ 7168",
      status: "Unpublished",
    },
    {
      id: "9BfMfDJpbjI",
      start: "2023-05-03T18:30:11Z",
      title: "Creating components to display mobile in react native",
      url: "https://i.ytimg.com/vi/9BfMfDJpbjI/default.jpg",
      end: "2023-06-01T18:30:11Z",
      price: "₹ 4793",
      status: "Published",
    },
  ]
  return [...data, ...data, ...data];
};
function DataTables() {
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        Cell: ({ row }) => (
          <div className="flex items-center space-x-3">
            <img src={row.original.url} alt={row.original.title} className="w-[70px] h-[40px] mr-4 rounded-lg object-cover" />
            <span className="text-[#4B4747] break-words whitespace-normal">{row.original.title}</span>
          </div>
        ),
      },
      {
        Header: "Start Date",
        accessor: "start",
        Cell: ({ value }) => {
          const date = new Date(value);
          const day = date.getDate();
          const month = date.toLocaleString("default", { month: "short" });
          const year = date.getFullYear();
          return `${day} ${month} ${year}`;
        },
      },
      {
        Header: "End Date",
        accessor: "end",
        Cell: ({ value }) => {
          const date = new Date(value);
          const day = date.getDate();
          const month = date.toLocaleString("default", { month: "short" });
          const year = date.getFullYear();
          return `${day} ${month} ${year}`;
        },
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Validity/Expiry",
        accessor: (row) => {
          const startDate = new Date(row.start);
          const endDate = new Date(row.end);
          const differenceInTime = endDate.getTime() - startDate.getTime();
          const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
          return `${differenceInDays} days`;
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <div
            className={`whitespace-normal text-xs p-1 text-center border border-gray-300 ${
              value === "Published"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {value}
          </div>
        ),
      },
    ],
    []
  );
  const data = useMemo(() => getData(), []);
  return (
    <Container containerStyle={`bg-[#E2BBE9]`} headingStyle={`text-[#444B79]`}>
      <div className="flex flex-col max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 justify-start rounded-2xl w-[1200px] h-[650px] m-auto bg-[#F9F7F7] drop-shadow-[2px_2px_0_rgba(0, 0, 0, 0.25)] p-4 mt-5">
        <div className="">
          <h1 className="font-sans font-[700] text-[28px] leading-[52px]">
            Batches
          </h1>
          <p className="font-sans font-[400] text-[17px] leading-[25px] text-[#4B4747] break-words">
            Create learner’s batch and share information at the same time.
          </p>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </Container>
  );
}

export default DataTables;
