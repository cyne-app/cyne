import { z } from 'zod';

// Tools Export
export const utilTools = {
  askForConfirmation: {
    displayName: '⚠️ Confirmation',
    description: 'Confirm the execution of a function on behalf of the user.',
    parameters: z.object({
      message: z.string().describe('The message to ask for confirmation'),
    }),
    execute: async ({ message }: { message: string }) => {
      return {
        data: {
          message,
        },
      };
    },
    render: (raw: unknown) => {
      const result = raw as { data: { message: string } };

      return (
        <div className="relative overflow-hidden rounded-2xl bg-muted/50 p-4">
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground">
              {result.data.message}
            </p>
          </div>
        </div>
      );
    },
  },
};
