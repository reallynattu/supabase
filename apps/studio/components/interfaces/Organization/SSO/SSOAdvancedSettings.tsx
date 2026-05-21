import type { UseFormReturn } from 'react-hook-form'
import { FormControl, FormField, Input } from 'ui'
import { CollapsibleCardFormSection } from 'ui-patterns/CollapsibleCardFormSection'
import { FormItemLayout } from 'ui-patterns/form/FormItemLayout/FormItemLayout'

import type { SSOConfigFormSchema } from './SSOConfig'

export const SSOAdvancedSettings = ({ form }: { form: UseFormReturn<SSOConfigFormSchema> }) => (
  <CollapsibleCardFormSection
    title="Advanced settings"
    description="Required for enterprise-managed MCP authentication"
  >
    <FormField
      control={form.control}
      name="oidcIssuer"
      render={({ field }) => (
        <FormItemLayout
          layout="flex-row-reverse"
          label="OIDC Issuer"
          description="The OIDC issuer URL of your identity provider. Required for enterprise-managed MCP authentication."
        >
          <FormControl>
            <Input placeholder="https://your-org.okta.com" {...field} />
          </FormControl>
        </FormItemLayout>
      )}
    />
  </CollapsibleCardFormSection>
)
