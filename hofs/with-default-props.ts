import compose from "../utils/compose";
import { withPageContent } from "./with-page-content";
import { withPageSettings } from "./with-page-settings";
import { withPreviewState } from "./with-preview-state";
import {GetStaticProps} from 'next';

type ComposedStaticProps = (GetStaticProps) => GetStaticProps;

export const withDefaultProps: ComposedStaticProps = compose<ComposedStaticProps>([
  withPreviewState,
  withPageSettings,
  withPageContent,
]);
