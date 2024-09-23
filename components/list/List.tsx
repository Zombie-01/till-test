import { PlusOutlined, FilterOutlined, ReloadOutlined } from "@ant-design/icons";
import { Card, Button, Typography, Space, Tag, Drawer } from "antd";
import { FilterItemType, useListContext } from "./ListProvider";

/**
 * List
 */
export const List = ({
  titleIcon,
  title,
  hideCreateButton = false,
  createButtonText,
  onCreateButtonClick,
  hideFilterButton = false,
  filterButtonText,
  filterForm,
  children,
}: ListProps) => {
  // List context states
  const { filters, showFilterForm, setShowFilterForm, setFilters, setOptions } = useListContext();

  // Filter item close
  const onFilterItemClose = (item: FilterItemType, fieldName: string) => {
    // Update the filters array in the state
    setFilters((prevFilters) => {
      if (!prevFilters) return null;

      // Create a new array of filters, removing the closed item
      const updatedFilters = prevFilters.map((filter) => ({
        ...filter,
        items:
          fieldName === filter.filterField
            ? filter.items.filter((filterItem) => filterItem.id !== item.id)
            : filter.items,
      }));

      // Remove the filter entirely if its items array is empty
      return updatedFilters.filter((filter) => filter.items.length > 0);
    });
  };

  const onResetFilter = () => {
    setFilters(null);
    setOptions((_prevState) => ({ page: 0, size: _prevState.size }));
  };

  // Render
  return (
    <Card
      title={
        <Space align="center">
          {titleIcon}

          <Typography.Title level={5} style={{ marginBottom: 0 }}>
            {title}
          </Typography.Title>
        </Space>
      }
      extra={
        <Space>
          {/* Filters */}
          {filters && (
            <Space size={20} style={{ marginRight: 30 }}>
              {filters.map((filter) => (
                <Space key={filter.filterName} size={2}>
                  <Typography.Text strong>{filter.filterName}:</Typography.Text>
                  {filter.items.map((item) => (
                    <Tag key={item.id} closable onClose={() => onFilterItemClose(item, filter.filterField)}>
                      {item.name}
                    </Tag>
                  ))}
                </Space>
              ))}
            </Space>
          )}

          {/* Create button */}
          {hideCreateButton === false && (
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                onCreateButtonClick && onCreateButtonClick();
              }}
            >
              {createButtonText || "Create new"}
            </Button>
          )}

          {/* Filter button */}
          {hideFilterButton === false && (
            <Button icon={<FilterOutlined />} onClick={() => setShowFilterForm(true)}>
              {filterButtonText || "Хайлт"}
            </Button>
          )}

          {/* Reset button */}
          {filters && filters.length > 0 && (
            <Button icon={<ReloadOutlined />} onClick={onResetFilter}>
              Reset
            </Button>
          )}
        </Space>
      }
    >
      {/* Table */}
      {children}

      {/* Filter modal */}
      <Drawer title={"Хайлт"} open={showFilterForm} width={400} onClose={() => setShowFilterForm(false)}>
        {filterForm}
      </Drawer>
    </Card>
  );
};

export default List;

/**
 * List props
 */
interface ListProps {
  // Title
  titleIcon: React.ReactNode;
  title: string;

  // Create
  createButtonText?: string;
  hideCreateButton?: boolean | null;
  onCreate?: () => void;
  onCreateButtonClick?: () => void;

  // Filter
  filterButtonText?: string;
  hideFilterButton?: boolean | null;
  filterForm?: React.ReactNode;
  onFilter?: () => void;

  // Children
  children: React.ReactNode;
}
