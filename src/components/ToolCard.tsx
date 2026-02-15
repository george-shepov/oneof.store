'use client';

import { Tool } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import Link from 'next/link';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-md mb-4 flex items-center justify-center text-white text-4xl font-bold">
          {tool.name.charAt(0)}
        </div>
        <CardTitle className="text-xl">{tool.name}</CardTitle>
        <CardDescription>{tool.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {tool.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {tool.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <div className="w-full flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${(tool.price / 100).toFixed(2)}
          </span>
          <Badge variant="success">{tool.category}</Badge>
        </div>
        <Link href={`/tools/${tool.id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
